<style>
    textarea {
      Width: 648px;
      height: 648px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      box-shadow: 1px 1px 3px #e2e2e2;
      resize: none;
    }
    .output {
      margin-top: 20px;

    }
    .option {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 10px
    }

    .output p {
      white-space: pre-wrap;
      width: 600px;
      padding: 10px;
      font-size: 90%;
    }
    
    input[type=checkbox]{
    width: 16px;
    height: 16px;
    margin-top: 2px;
    position: relative;
    }
    input[type=checkbox]::after {
    position: absolute;
    top: 0;
    color: #000;
    width: 16px;
    height: 16px;
    display: inline-block;
    visibility: visible;
    padding-left: 0px;
    text-align: center;
    content: ' ';
    border-radius: 3px;
    }
    input[type=checkbox]:checked::after {
    content: "✓";
    color: #ffffff;
    font-size: 10px;
    line-height: 15px;
    background-color: #8C1740;
  }

</style>
<!--没想到csdn也有有用的一天。https://blog.csdn.net/ruanxinjie/article/details/119670108-->

<!--别问为什么那么多空行，代码能跑-->
# 参考文献排序工具

>本页面修改自 https://github.com/wzkMaster/thesis-reference-tool

::: info 输入参考文献列表
<textarea id="ref-list" placeholder="将参考文献粘贴至此"></textarea>
  <el-button @click="sortReferences()" round color="#8C1740">点此排序</el-button>
  <input id="sort" type="checkbox" ><label for="sort">根据作者姓名字顺排序</label>
::: 

::: info 输出参考文献列表
<el-button @click="copyText()" round color="#8C1740">一键复制</el-button>
  <div class="output">
    <p id="ref-output"></p>
  </div>
:::

::: info APA排序提示
若有英语文献在前，中文在后的需求：  
先根据作者姓名字顺排序一次，随后手动将英语文献置顶，再取消勾选排序一次。
:::

<script setup>
  
// 复制排序后的参考文献列表到剪贴板
function copyText() {
  const refOutput = document.getElementById("ref-output");
  navigator.clipboard.writeText(refOutput.textContent).then(
    function () {
      alert("复制成功！");
    },
    function () {
      alert("复制失败！");
    }
  );
}



function sortReferences() {
  const input = document
    .getElementById("ref-list")
    .value.split("\n")
    .filter((item) => item);

  const isSort = document.getElementById("sort").checked;

  // 根据作者字顺排序
  if (isSort) {
    input.sort((a, b) =>
      a
        .replace(/^\[\d+\]\s*/, "")
        .localeCompare(b.replace(/^\[\d+\]\s*/, ""), "zh-Hans-CN", {
          sensitivity: "accent",
        })
    );
  }

  // 去除原序号，添加正确的新序号
  const r = input.map((item, index) => {
    if (item) {
      return `[${index + 1}] ${item.trim().replace(/^\[\d+\]\s*/, "")}`;
    }
  });

  // 输出到页面
  const refOutput = document.getElementById("ref-output");
  refOutput.textContent = r.join("\r\n");
}
</script>
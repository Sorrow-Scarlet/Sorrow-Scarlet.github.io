# 参考文献排序工具
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
</style>


<template>
  <a-button>按钮</a-button>
</template>

<script setup>
import { AButton } from 'amu-ui'
</script>

  <div class="container">
    <textarea id="ref-list" placeholder="请在这里输入您的参考文献列表"></textarea>
    <div class="option">
      <AButton onclick="sortReferences()">排序</AButton>
      <div>
        <input id="sort" type="checkbox"><label for="sort">根据作者姓名字顺排序</label>
      </div>
    </div>
  

   <div class="output">
      <label>排序后的参考文献列表：</label>
      <button onclick="copyText()">一键复制</button>
      <p id="ref-output"></p>
    </div>
  </div>


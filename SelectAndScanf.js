// 生成一个随机数
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 获取页面上所有的输入框（排除带有特定类名的输入框）
var inputBoxes = document.querySelectorAll('input[type="text"], input[type="number"], input[type="password"]:not(.exclude)');

// 向输入框中输入随机数
inputBoxes.forEach(function(inputBox) {
    var randomNumber = generateRandomNumber(1, 100);
    inputBox.value = randomNumber;
      // 创建一个新的事件
  var event = new Event('input', {
    bubbles: true,
    cancelable: true,
  });

  // 触发事件
  inputBox.dispatchEvent(event);
});

// 获取具有类名为 "el-select" 的所有 select 元素
var selectElements = document.querySelectorAll('.el-select');

// 遍历每个 select 元素并模拟点击事件以及选择第一个选项
selectElements.forEach(function(selectElement) {
    // 模拟点击事件
    selectElement.click();

    // 获取下拉框中的第一个选项
    var firstOption = selectElement.querySelector('.el-select-dropdown__item'); console.log(firstOption)

    // 如果找到第一个选项，则选择它
    if (firstOption) {
        firstOption.click();
    }

    // 触发change事件（如果需要）
    var event = new Event('change', {
        bubbles: true,
        cancelable: true,
    });
    selectElement.dispatchEvent(event);
});

// 获取具有类名为 "el-select" 的所有 select 元素
var selectElements = document.querySelectorAll('.el-select');

// 遍历每个 select 元素并模拟点击事件以及选择第一个选项
selectElements.forEach(function(selectElement) {
    // 模拟点击事件
    selectElement.click();

    // 选择第一个选项
    var firstOption = selectElement.querySelector('.el-select-dropdown__item');
    if (firstOption) {
        // firstOption.selected = true;
    }

    // 触发change事件（如果需要）
    var event = new Event('change', {
        bubbles: true,
        cancelable: true,
    });
    selectElement.dispatchEvent(event);
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

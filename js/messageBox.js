/**
 * AlertBox.js
 * 原生javascript弹框插件
 */
var MessageBox = {
    containerClass: 'postbird-box-container active',
    box: null, // 用于标识增加的div
    textTemplate: {
        title: '提示信息',
        content: '提示内容',
        okBtn: '确定',
        cancelBtn: '取消',
        contentColor: '#333',
        cancelBtnColor:'#333',
        okBtnColor: '#fff'
    },
    getAlertTemplate: function () {
        var temp =
            '<div class="postbird-box-dialog">' +
            '<div class="postbird-box-content">' +
            '<div class="postbird-box-header">' +
            '<span class="postbird-box-close-btn">×</span>' +
            '<span class="postbird-box-title">' +
            '<span >' + this.textTemplate.title + '</span>' +
            '</span>' +
            '</div>' +
            '<div class="postbird-box-text">' +
            '<span style="color:' + this.textTemplate.contentColor + ';">' + this.textTemplate.content + '</span>' +
            '</div>' +
            '<div class="postbird-box-footer">' +
            '<button class="btn-footer btn-block-footer btn-footer-ok" style="color:' + this.textTemplate.okBtnColor + ';">' + this.textTemplate.okBtn + '</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        return temp;
    },
    getConfirmTemplate: function () {
        var  temp =
            '<div class="postbird-box-container">' +
            '<div class="postbird-box-dialog">' +
            '<div class="postbird-box-content">' +
            '<div class="postbird-box-header">' +
            '<span class="postbird-box-close-btn">×</span>' +
            '<span class="postbird-box-title">' +
            '<span >' + this.textTemplate.title + '</span>' +
            '</span>' +
            '</div>' +
            '<div class="postbird-box-text">' +
            '<span style="color:' + this.textTemplate.contentColor + ';">' + this.textTemplate.content + '?</span>' +
            '</div>' +
            '<div class="postbird-box-footer">' +
            '<button class="btn-footer btn-left-footer btn-footer-cancel" style="color:' + this.textTemplate.cancelBtnColor + ';">' + this.textTemplate.cancelBtn + '</button>' +
            '<button class="btn-footer btn-right-footer btn-footer-ok"  style="color:' + this.textTemplate.okBtnColor + ';">' + this.textTemplate.okBtn + '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        return temp;
    },
    alert: function (opt) {
        this.textTemplate.title = opt.title || this.textTemplate.title;
        this.textTemplate.content = opt.content || this.textTemplate.content;
        this.textTemplate.okBtn = opt.okBtn || this.textTemplate.okBtn;
        this.textTemplate.okBtnColor = opt.okBtnColor || this.textTemplate.okBtnColor;
        this.textTemplate.contentColor = opt.contentColor || this.textTemplate.contentColor;
        var box = document.createElement("div"),
            _this = this;
        box.className = this.containerClass;
        box.innerHTML = this.getAlertTemplate();
        this.box = box;
        document.body.appendChild(box);
        var btn = document.getElementsByClassName('btn-footer-ok');
        btn[btn.length - 1].onclick = function () {
            if (opt.onConfirm) {
                opt.onConfirm();
            }
            _this.removeBox();
        };
        var cancelx = document.getElementsByClassName('postbird-box-close-btn');
        cancelx[cancelx.length - 1].onclick = function () {
            _this.removeBox();
        }
    },
    confirm: function (opt) {
        this.textTemplate.title = opt.title || this.textTemplate.promptTitle;
        this.textTemplate.promptPlaceholder = opt.promptPlaceholder || this.textTemplate.promptPlaceholder;
        this.textTemplate.okBtn = opt.okBtn || this.textTemplate.promptOkBtn;
        this.textTemplate.okBtnColor = opt.okBtnColor || this.textTemplate.okBtnColor;
        this.textTemplate.cancelBtn = opt.cancelBtn || this.textTemplate.cancelBtn;
        this.textTemplate.cancelBtnColor = opt.cancelBtnColor || this.textTemplate.cancelBtnColor;
        this.textTemplate.content = opt.content || this.textTemplate.content;
        var box = document.createElement("div"),
            _this = this;
        this.box = box;
        box.className = this.containerClass;
        box.innerHTML = this.getConfirmTemplate();
        document.body.appendChild(box);
        var okBtn = document.getElementsByClassName('btn-footer-ok');
        okBtn[okBtn.length - 1].onclick = function () {
            if (opt.onConfirm) {
                opt.onConfirm();
            }
            _this.removeBox();
        }
        var cancelBtn = document.getElementsByClassName('btn-footer-cancel');
        cancelBtn[cancelBtn.length - 1].onclick = function () {
            if (opt.onCancel) {
                opt.onCancel();
            }
            _this.removeBox();
        };
        var cancelx = document.getElementsByClassName('postbird-box-close-btn');
        cancelx[cancelx.length - 1].onclick = function () {
            _this.removeBox();
        }
    },
    colse: function () {
        this.removeBox();
    },
    removeBox: function () {
        var box = document.getElementsByClassName(this.containerClass);
        document.body.removeChild(box[box.length - 1]);
    }
};
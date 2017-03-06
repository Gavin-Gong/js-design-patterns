## 单例模式
保证一个类只有一个实例. 常用于悬浮窗这种只需要单个对象的场景下


任务: 
用单例模式设计一个弹窗
- 自定义内部模板, 可以更新内部模板, Dialog(title, content, fn)
- close, open, toggle方法, 支持回调函数
- template函数, 定义模板

TODO:
Dialog.open() 这样的接口感觉会更好
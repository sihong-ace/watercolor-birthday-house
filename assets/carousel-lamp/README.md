# 桌上相片灯 · 来源与修改

原项目：[Carousel Lamp](https://github.com/Daria1216/carousel-lamp)，作者：咕噜蛋Daria。
下载日期：2026-10-07。完整版权声明及非商业使用许可保存在 `LICENSE.txt`。

`original-carousel-scene.ts` 保留上游场景源码；`carousel-ornaments.ts` 和三张 PNG 为上游原始文件。`ASSETS.md` 为上游素材说明。

修改版本为 `src/table-carousel.ts`：保留木马几何、装饰贴图和 16 个挂片，将模型按 x/z=0.112、y=0.087 缩小为桌面摆件，接入生日小屋共用的渲染器、昼夜灯光及动画循环。原项目的独立镜头、投影效果与页面 UI 未接入。照片编辑、本地保存、预置内容和房间近景交互由本项目的独立模块实现。

本次未使用上游字体或 HEIC 解码库；上传格式为 JPG、PNG、WebP 和 AVIF。近景界面保留可见的原项目署名与链接。此改编部分仍遵循上游非商业使用许可。

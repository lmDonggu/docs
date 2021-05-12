#!/usr/bin/env sh

# 生成静态文件
npm run build
# 进入静态文件的文件夹
cd public
# 仓库提交
git init
git add -A
git commit -m 'deploy'
# 发布到
git push -f git@github.com:lmDonggu/docs.git master
# 删除编译文件
cd ../
rm -rf public
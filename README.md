# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)

# 清除原有git信息并关联新的远程仓库
```base
rm -rf .git
git init
git remote add origin <URL>
//主分支改名main | master二选一
git branch -m <main | master>
git add .
git commit -m "feat: init"
git push -u origin <main | master>
```

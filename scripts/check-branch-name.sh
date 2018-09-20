#!/bin/bash

branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$branch" =~ ^((dev|release)-([0-9]+\.){2}[0-9]+)|((feature|bugfix)-.*)|(local.*)|(master)|(compat)$ ]];
then
    exit 0
else
    echo 请使用符合规范的分支名称
    exit 1
fi

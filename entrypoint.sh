#!/usr/bin/env bash
set -e

GreenBG="\\033[42;37m"
YellowBG="\\033[43;37m"
BlueBG="\\033[44;37m"
Font="\\033[0m"

Version="${BlueBG}[版本]${Font}"
Info="${GreenBG}[信息]${Font}"
Warn="${YellowBG}[提示]${Font}"

PC_DIR_FRONT="/www/bailu-ci/bailu-ui"

mkdir -p $PC_DIR_FRONT

cd $PC_DIR_FRONT

if [ ! -d $PC_DIR_FRONT"/.git" ]; then
    echo -e $Version" 项目不存在，开始克隆项目"
    cd $GIT_DIR_FRONT
    git clone https://gitee.com/xiaofan_118/bailu-ui.git
    echo -e $Info" 项目克隆完成"
    cd $PC_DIR_FRONT
else
    echo -e $Version" 项目已存在，开始更新项目"
    git pull
    echo -e $Info" 项目更新完成, 开始执行构建..."
fi
    pnpm install
    pnpm docs:build
    echo -e $Info" 项目构建完成"




# vue Ci 构建流程
FROM ccr.ccs.tencentyun.com/ystest/xf-node:v18.9.0 as build-stage

MAINTAINER xf <1182900548@qq.com>


WORKDIR /www/bailu-ci/bailu-ui

COPY . .

RUN chmod +x /www/bailu-ci/bailu-ui/entrypoint.sh

ENTRYPOINT ["/www/bailu-ci/bailu-ui/entrypoint.sh"]
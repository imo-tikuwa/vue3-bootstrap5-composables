FROM node:18-slim
SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

ARG WORKDIR_NAME
ENV TZ=Asia/Tokyo

RUN apt-get update -o Acquire::Check-Valid-Until=false -o Acquire::Check-Date=false && \
    apt-get -y --no-install-recommends install ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /tmp/* && \
    { \
        echo "alias ll='ls -l --color=auto'"; \
    } >> /home/node/.bashrc

WORKDIR /${WORKDIR_NAME}

USER node

FROM node:14.15.4-slim

RUN apt-get update && apt-get install -y locales \
    && locale-gen en_US.UTF-8 \
    && localedef -i en_US -f UTF-8 en_US.UTF-8 \
    && echo "export LC_ALL=en_US.UTF-8" >> ~/.bashrc \
    && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN apt-get install -y \
    wget \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/LuciZrTest/lyfe.git /root/LyFE/
WORKDIR /root/LyFE/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]

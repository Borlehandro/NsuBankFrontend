sudo docker build -t nsu_bank_frontend .

sudo docker run -p 3000:3000 -e REACT_APP_BACKEND_URL=http://172.18.0.3:8080/ --net=bank_network nsu_bank_frontend
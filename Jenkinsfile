pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                //sh 'docker stop $(docker ps -q --filter ancestor=alipo-marketplace )'
                //sh 'docker ps -a -q --filter "name=alipo-marketplace-container" | xargs -r docker stop'
                // sh 'docker stop $(docker ps -a -q --filter "name=alipo-marketplace-container")'
                // sh 'docker rm $(docker ps -a -q --filter "name=alipo-marketplace-container")'
                // sh 'docker ps -a -q --filter "name=alipo-marketplace-container" | docker stop alipo-marketplace-container | docker rm alipo-marketplace-container'
                // sh 'docker image rmi -f alipo-marketplace'
                // sh 'docker build . -t alipo-marketplace'
                sh 'docker system prune -af'
                sh 'docker ps -a -q --filter "name=alipo-marketplace-container" | docker stop alipo-marketplace-container | docker rm alipo-marketplace-container | docker image rmi -f alipo-marketplace | docker build . -t alipo-marketplace'
            }
        }
        stage("deploy"){
           steps {
               //sh "scp -P 22333 /var/lib/jenkins/workspace/alipo-apit-gateway-pipeline/target/api-gateway-0.0.1-SNAPSHOT.jar root@103.78.54.188:/root/api-gateway-0.0.1-SNAPSHOT.jar"
               //sh 'ssh root@103.78.54.188 -p 22333 "docker ps -a -q --filter "name=alipo-marketplace-container" | docker stop alipo-marketplace-container | docker rm alipo-marketplace-container | docker image rmi -f alipo-marketplace"'
               //sh 'docker save alipo-marketplace | ssh -C root@103.78.54.188 -p 22333 "docker load | docker system prune -af | docker stop alipo-marketplace-container || true && docker rm -f alipo-marketplace-container || true"'
               sh 'docker save alipo-marketplace | ssh -C root@103.78.54.188 -p 22333 "docker load"'
           }
        }
        stage("run") {
           steps {
               //sh 'ssh root@103.78.54.188 -p 22333 "screen -r api-gateway; kill $(lsof -t -i:8888); java  -Dserver.port=8888 -jar /root/api-gateway-0.0.1-SNAPSHOT.jar; screen -d api-gateway; exit 1"'
               //sh 'docker ps -a -q | docker run -d -p 3000:3000 --name alipo-marketplace-container alipo-marketplace'
               sh 'ssh root@103.78.54.188 -p 22333 "docker stop alipo-marketplace-container || true && docker rm -f alipo-marketplace-container || true"'
               sh 'ssh root@103.78.54.188 -p 22333 "docker run -d -p 3000:3000 --name alipo-marketplace-container alipo-marketplace"'
               sh 'ssh root@103.78.54.188 -p 22333 "docker system prune -af"'
           }
        }
    }
}
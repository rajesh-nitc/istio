# Cloud Operations GKE
## Prerequisites
gloud Shell
```
gcloud alpha cloud-shell ssh
```
Enable API
```
gcloud services list --available
gcloud services enable containerregistry.googleapis.com
gcloud services enable container.googleapis.com
```
GKE Cluster
```
gcloud container clusters create first-cluster --zone us-central1-a --num-nodes=1
```
## Getting Started

Push Images
```
git clone https://github.com/rajesh-nitc/operations-gke.git
cd operations-gke/services/svc-a
docker build -t image-a .
PROJECT_ID=$(gcloud config get-value project)
docker tag image-a gcr.io/$PROJECT_ID/image-a
docker push gcr.io/first-project-283216/image-a
cd operations-gke/services/svc-b
docker build -t image-b .
docker tag image-b gcr.io/$PROJECT_ID/image-b
docker push gcr.io/first-project-283216/image-b
```

## Clean Up
```
gcloud container clusters delete first-cluster --zone us-central1-a
```
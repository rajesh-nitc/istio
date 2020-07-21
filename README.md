# Cloud Operations GKE
## Prerequisites
GKE Cluster Running with Istio Enabled

GCP APIs Enabled
```
gcloud services list --available
gcloud services enable containerregistry.googleapis.com
gcloud services enable container.googleapis.com
```

## Getting Started
### Push Images to GCR
```
gcloud alpha cloud-shell ssh
PROJECT_ID=$(gcloud config get-value project)
git clone https://github.com/rajesh-nitc/operations-gke.git
cd operations-gke/services/svc-a
docker build -t image-a .
docker tag image-a gcr.io/$PROJECT_ID/image-a
docker push gcr.io/first-project-283216/image-a
cd operations-gke/services/svc-b
docker build -t image-b .
docker tag image-b gcr.io/$PROJECT_ID/image-b
docker push gcr.io/first-project-283216/image-b
```
### Enable Automatic Istio Injection
```
kubectl label namespace default istio-injection=enabled
```
### Deploy on GKE
```
kubectl apply -f deploy/
```
### Istio


## Clean Up
```
gcloud container clusters delete first-cluster --zone us-central1-a
```
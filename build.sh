#!/bin/bash
docker build -f Dockerfile.nginx -t registry-sistemas-openshift.emergyalabs.com:443/drupal/drupal-8-6c6a2d-nginx:latest . && \
docker push registry-sistemas-openshift.emergyalabs.com:443/drupal/drupal-8-6c6a2d-nginx:latest

docker build -f Dockerfile -t registry-sistemas-openshift.emergyalabs.com:443/drupal/drupal-8-6c6a2d:latest . && \
docker push registry-sistemas-openshift.emergyalabs.com:443/drupal/drupal-8-6c6a2d:latest
import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs';
import { EcsService, EcsServiceProps } from './ecs-service'

export class PayForAdoptionService extends EcsService {

  constructor(scope: cdk.Construct, id: string, props: EcsServiceProps  ) {
    super(scope, id, props);
  }

  createContainerImage() : ecs.ContainerImage {
    return ecs.ContainerImage.fromAsset("../../payforadoption/PayForAdoption", {
      repositoryName: "pet-pay-for-adoption"
    })
  }
}
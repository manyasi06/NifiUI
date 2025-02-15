interface NifiDeployment {
    DeploymentName: string;
    DeploymentNamespace: string;
    DeploymentStatus: string;
}

export const GetKubeState = async ():Promise<NifiDeployment[]> => {
    const response = await fetch('http://localhost:8000/api/v1/kube-state');
    return response.json();
}
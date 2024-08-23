import { useState } from 'react';
import * as THREE from 'three';

const useObjectControls = (setSelectedObject, setShowInfoPanel) => {
  const [highlightedMesh, setHighlightedMesh] = useState(null);

  const handleObjectClick = (mesh) => {
    setSelectedObject(mesh);
    setShowInfoPanel(true);
  };

  const handleObjectHover = (mesh) => {
    if (mesh && mesh !== highlightedMesh) {
      if (highlightedMesh) {
        highlightedMesh.material.color.copy(highlightedMesh.originalColor);
      }
      mesh.originalColor = mesh.material.color.clone();
      const darkerColor = mesh.originalColor.clone().multiplyScalar(0.8);
      mesh.material.color.copy(darkerColor);
      setHighlightedMesh(mesh);
    } else if (!mesh && highlightedMesh) {
      highlightedMesh.material.color.copy(highlightedMesh.originalColor);
      setHighlightedMesh(null);
    }
  };

  return { handleObjectClick, handleObjectHover, highlightedMesh };
};

export default useObjectControls;

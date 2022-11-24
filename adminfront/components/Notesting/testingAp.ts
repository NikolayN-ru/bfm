export {}

interface Vector3 {
  x: number
  y: number
  z: number
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis]
}

getComponent({ x: 3, y: 4, z: 1 }, "y")

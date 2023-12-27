<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

let canvas = null
let renderer = null

function onResize(e: Event) {
  if (canvas && renderer) {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  }
}

onMounted(() => {
  canvas = document.querySelector('#canvas')
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  )

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: false
  })

  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  const geometry = new THREE.CylinderGeometry(1, 1, 0.3, 32)
  const texture = new THREE.TextureLoader().load('/images/coin.png')
  const topMaterial = new THREE.MeshBasicMaterial({ map: texture })
  const sideMaterial = new THREE.MeshBasicMaterial({ color: 0x1b1925 })
  const bottomMaterial = new THREE.MeshBasicMaterial({ map: texture })
  const materials = [sideMaterial, topMaterial, bottomMaterial]
  const cylinder = new THREE.Mesh(geometry, materials)
  scene.add(cylinder)

  camera.position.z = 2

  cylinder.rotation.x = 0.5
  cylinder.rotation.y = 0.5
  cylinder.rotation.z = 0.5
  const animate = function () {
    requestAnimationFrame(animate)

    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  window.addEventListener('resize', onResize)

  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <canvas id="canvas" />
</template>

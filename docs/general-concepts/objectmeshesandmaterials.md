---
title: Changing Object Meshes and Materials
sidebar_position: 20
---

# Changing Object Meshes and Materials in Unity

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

In Unity, customizing the appearance of objects involves changing their meshes, materials, and material shaders. This guide will walk you through the process of making these changes, providing you with the necessary steps and links to the official Unity documentation for further details.

You might find this information particularly useful when working with some of our prefabs, such as [Hash Studios Megaphone Audio](https://hashstudiosllc.com/hashstudiosmegaphoneaudio), where customization of 3D models is essential.

<br/>

## Changing an Object's Mesh

To change an object's mesh:

1. **Select the Object:**
   - In the `Hierarchy` window, click on the object whose mesh you want to change.

2. **Access the Mesh Filter:**
   - In the `Inspector` window, locate the `Mesh Filter` component.

3. **Assign a New Mesh:**
   - Click on the small circle icon next to the `Mesh` field to open the `Object Picker` window.
   - Select a new mesh from the available options, or drag a mesh asset from the `Project` window into the `Mesh` field.

For more detailed instructions, visit the [Unity Documentation on Meshes](https://docs.unity3d.com/Manual/class-MeshFilter.html).

<br/>

## Changing an Object's Materials

To change an object's materials:

1. **Select the Object:**
   - In the `Hierarchy` window, click on the object whose material you want to change.

2. **Access the Renderer:**
   - In the `Inspector` window, locate the `Renderer` component (e.g., `Mesh Renderer`).

3. **Assign a New Material:**
   - Click on the small circle icon next to the `Material` field to open the `Object Picker` window.
   - Select a new material from the available options, or drag a material asset from the `Project` window into the `Material` field.

For more detailed instructions, visit the [Unity Documentation on Materials](https://docs.unity3d.com/Manual/Materials.html).

<br/>

## Changing an Object's Material Shader

To change the shader used by a material:

1. **Select the Material:**
   - In the `Project` window, locate and click on the material you want to modify.

2. **Access the Shader Dropdown:**
   - In the `Inspector` window, locate the `Shader` dropdown at the top of the material properties.

3. **Choose a New Shader:**
   - Click on the `Shader` dropdown to view available shaders.
   - Select a new shader from the list.

For more detailed instructions, visit the [Unity Documentation on Shaders](https://docs.unity3d.com/Manual/Shaders.html).

<br/>

By following these steps, you can effectively customize the appearance of objects in Unity, enhancing the visual quality and thematic consistency of your projects.

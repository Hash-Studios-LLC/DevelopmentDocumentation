---
title: Setting Up Post Processing
sidebar_position: 3
---

# Setting Up Post Processing in Unity

:::warning

**Important:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.

:::

Post processing is an essential tool in Unity that enhances the visual quality of your scenes by applying effects such as bloom, color grading, and depth of field. This guide will walk you through the process of setting up post processing and adding it to your camera.

<br/>

## What is Post Processing?

Post processing in Unity refers to the process of applying visual effects to a camera's rendered image before it is displayed on the screen. These effects can significantly improve the visual fidelity of a game by adding enhancements that simulate real-world camera effects.

For more detailed information on post processing, refer to the [Unity Post Processing Documentation](https://docs.unity3d.com/Packages/com.unity.postprocessing@3.1/manual/index.html).

<br/>

### Adding a Post Processing Volume (By Yourself)

<br/>

<div class="image">
   
   ![Example GIF](/img/generalconcepts/addingpostprocessingvolume.gif)

</div>

1. **Create a Post Processing Volume:**
   - In the Hierarchy window, right-click and select `Create Empty` to create a new GameObject.
   - Rename this GameObject to `PostProcessingVolume`.
   - With the `PostProcessingVolume` GameObject selected, click `Add Component` in the Inspector window.
   - Search for and add the `Post-process Volume` component.
   - In the `Post-process Volume` component, check the `Is Global` checkbox.
   - Click `Add Override` and select the effects you want to apply (e.g., Bloom, Color Grading).

<br/>

<!-- <img src="/img/generalconcepts/addingpostprocessinglayer.gif" alt="gif"/> -->

<div class="image">
   
   ![Example GIF](/img/generalconcepts/addingpostprocessinglayer.gif)

</div>

2. **Create a Post Processing Layer:**
   - In the Hierarchy window, select your Main Camera.
   - In the Inspector window, click `Add Component`.
   - Search for and add the `Post-process Layer` component.
   - In the `Post-process Layer` component, set the `Layer` to `Default`.

3. **Configure the Post Processing Layer:**
   - In the `Post-process Layer` component, set the `Layer` to `Default`.
   - Under the `Post-process Layer` component, select `Default` from the `Layer` dropdown menu.
   - Ensure that `Volume Blending` is set to `Local`.

<br/>

### Adding a Post Processing Volume (From Our Prefabs)

1. **Install Our Prefab:**
   - Download the prefab from our store.
   - Import the prefab into your Unity project:
     - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
     - Locate and select the downloaded prefab package.
     - Click `Import` to add the prefab to your project.

2. **Locate the Post Processing Volume:**
   - After importing, navigate to the prefab directory in the Project window.
   - Locate the `PostProcessingVolume` GameObject included with the prefab.

3. **Add the Post Processing Volume to Your Scene:**
   - Drag the `PostProcessingVolume` GameObject from the prefab directory into your scene.

<div class="image100">
   
   ![Example GIF](/img/generalconcepts/settingupcamera.gif)

</div>

4. **Set Up the Camera:**
   - In the Hierarchy window, select your Main Camera.
   - In the Inspector window, ensure the `Post-process Layer` component is added and configured as mentioned earlier.

<br/>

By following these steps, you can install post processing in Unity, add it to your camera, and configure the desired effects to enhance the visual quality of your scenes.

For more detailed information on post processing, refer to the [Unity Post Processing Documentation](https://docs.unity3d.com/Packages/com.unity.postprocessing@3.1/manual/index.html).

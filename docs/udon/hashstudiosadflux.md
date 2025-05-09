---
title: Hash Studios AdFlux
sidebar_position: 10
---

# Installing Hash Studios AdFlux

:::warning

**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.

:::

Crafted by Hash Studios for UdonSharp worlds, this Unity Poster Prefab encapsulates our dedication to innovation, supreme quality, and fluid user experiences. This guide will walk you through the installation process for Hash Studios AdFlux.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/5HFmHZ3YDU0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/nGFH0eI06rc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- Multiple Poster Display
- Smooth Transitions
- Website Linking
- Customizable Display Duration
- Ease of Use
- Premium Experience

<br/>

## VR Showcase World

Experience Hash Studios AdFlux for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_8534b2fb-1040-479f-b34f-bb9507c8905f)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download the Hash Studios AdFlux prefab from our website.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag the AdFlux prefab into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Set Up Posters and URLs**

:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/docs/general-concepts/unityspriteconversion/).
:::

1. Under `Posters to Display`, put the posters you want to display. Please look at the **[Changing Images to Sprites](/docs/general-concepts/unityspriteconversion/)** section of the documentation for more information if you can't add your posters.
2. Under `URL Per Poster`, enter the URLs you want to display based on the index:
   - The first poster at index 0 under `Posters to Display` will show the link at index 0 of the `URL Per Poster` array.

<br/>

**4. Set Up Materials for Posters**

:::warning

**Important:** Each poster needs its own material.

:::

1. Go to the prefab files, navigate to `Materials`, and select `Poster Material`.
2. Duplicate the material by pressing `Ctrl + D` (or `Cmd + D` on macOS).
3. Add the new duplicated material to the material slot under the `Materials for the Posters` section of the Inspector.

<br/>

**5. Customize Display Duration**

1. Change the `Time Per Poster` to however long you want each poster to display.

<br/>

**6. Add Emission (Optional)**

If you wish to add an emission effect to the prefab:

1. Inside the `PosterAd_Internal.cs` file, locate the `changeMaterial()` function.

2. Add the following line of code to enable the emission texture:

  ```
  posterScript.posterMaterial.SetTexture("_EmissionMap", posterScript.postersToDisplay[i]);
  ```
<br/><br/>

By following these steps, you can successfully install Hash Studios AdFlux and create a dynamic poster display in your virtual world.

For more detailed information and resources, visit the [Official Website](https://hashstudiosllc.com/hashstudiosadflux) or watch the [YouTube Tutorial](https://youtu.be/5HFmHZ3YDU0).

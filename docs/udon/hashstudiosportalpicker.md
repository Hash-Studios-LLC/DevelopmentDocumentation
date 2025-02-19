---
title: Hash Studios Portal Picker
sidebar_position: 10
---

# Installing Hash Studios Portal Picker

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

:::danger
There seems to be an error of not being able to add more than 13 worlds. We are looking into it, but if you still see this issue, please report it to us so we can keep note and remember this detail.
:::

:::note
**Important:** You cannot test this prefab in Unity and it must be tested in a VRChat Scene due to limitations of blueprint IDs and Udon.
:::

Meet Hash Studios Portal Picker, a Unity UdonSharp Prefab. This tool streamlines virtual navigation by allowing users to select worlds, view key details, and create portals for easy access. A significant advancement for world creation, it consolidates world information and enhances interconnectivity.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/D3I-WGlKpmE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- Premium Navigation Experience
- VR and PC Compatible
- User-Friendly Interface
- Optimized Performance
- Displays World Details

<br/>

## VR Showcase World

Experience Hash Studios Portal Picker for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_f2627123-d7ca-41d0-b9e5-fe79e98c7300)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Portal Picker from our **[website](https://hashstudiosllc.com/hashstudiosportalpicker)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Portal Picker into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Configure Hash Studios Portal Picker**

1. Select Hash Studios Portal Picker in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Portal Picker.

<br/>

**4. Setting Values based on Index**

:::info
The index values for each array match.

<details>
<summary>Example of Index Values</summary>

For example, the first portal is tied to index 0 of the `portal ID`, `portal name`, `portal description`, and `portal images`. This means that all details for the first portal should be in index 0 of each corresponding array.

**Example:**

If you have a portal with:
- `Portal ID`: "f2f3g3Bd231dlfase"
- `Portal Name`: "Fantasy World"
- `Portal Description`: "Explore the magical fantasy world."
- `Portal Image`: (Sprite of the Fantasy World)

All these details should be placed at index 0 in their respective arrays.

</details>

:::

1. Set your values in the `portal ID` array, `portal name` array, `portal description` array, and `portal images` array.

:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/docs/general-concepts/unityspriteconversion/).
:::

2. To add images to the `portal images` array, refer to our guide on **[Image to Sprite Conversion](/DevelopmentDocumentation/docs/general-concepts/settingupudon)** to convert your images to sprites so you can add them to the prefab.

<br/>

**5. Customizing Portal Position**

You can customize where the portal appears by selecting the `PortalMarketPlaceHolder` child object of the prefab and moving it around using the `transform` component.

<br/><br/>

By following these steps, you can successfully install Hash Studios Portal Picker and streamline virtual navigation in your VRChat worlds.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosportalpicker)** or watch the **[YouTube Tutorial](https://youtu.be/D3I-WGlKpmE)**.

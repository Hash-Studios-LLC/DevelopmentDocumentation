---
title: Hash Studios Megaphone Audio
sidebar_position: 10
---

# Installing Hash Studios Megaphone Audio

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing Hash Studios Megaphone Audio—the Ultimate Game-Changer for Your Virtual Events and Maps! Elevate your audio experience with features like customizable volume settings for speakers and listeners, a robust authorization system, and visually stunning 3D models you can personalize. Our user-friendly interface guarantees a quick setup, so you can focus on what really matters: delivering your message.

With Hash Studios Megaphone Audio, not only will your voice be heard—it will be remembered. Make your events more engaging and your maps more interactive, all with the ease of a click. Get ready to command attention like never before!

<br/>

## Features

- Customizable Volume With Speaker/Listener Control
- User White-listing
- 3D Model Customization
- Quick Setup: User-friendly
- Instance Master Support
- Multi-Platform Support

<br/>

## VR Showcase World

Experience Hash Studios Megaphone Audio for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_66ebe16f-c75b-472c-a556-bd4e3acf11a3)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Megaphone Audio from our **[website](https://hashstudiosllc.com/hashstudiosfadingteleporter)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

1. Drag `Hash Studios Megaphone Audio` into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

**3. Select Hash Studios Megaphone Audio**

1. Select `Hash Studios Megaphone Audio` in your Hierarchy.
2. In the Inspector window, you will see the configuration options for `Hash Studios Megaphone Audio`.

**4. Configure Volume Settings**

1. Open the `Volume Settings` section.
2. Adjust the volume levels for different roles:
   - `Normal Volume`: This is the default volume level when the megaphone is not in use (Recommended: 25).
   - `Speaker Volume`: This volume applies to authorized users holding the megaphone. Set it high to ensure players can hear announcements anywhere on the map (Recommended: 1000000).
   - `Listener Volume`: This volume applies to everyone except the speaker when the megaphone is in use. Set it low to minimize interruptions during announcements (Recommended: 1).

**5. Configure Authorization Settings**

1. Open the `Authorization` tab.
2. Modify settings for user authorization:
   - `Master as Speaker`: Automatically authorizes the instance master as a speaker.
   - `Whitelisted Players as Speaker`: Specifies individuals who are automatically authorized as speakers. If the list is empty, no one will be whitelisted.

**6. Customize the Megaphone Model**

:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/DevelopmentDocumentation/docs/general-concepts/unityspriteconversion/).
:::

1. Open the `Model Customization` tab.
2. Customize the megaphone appearance:
   - `Type of Object Mesh`: Choose between `Current Megaphone Mesh` (default) or `Custom Mesh (Not Recommended)`.
   - For `Current Megaphone Mesh`:
     - `Megaphone Logo`: Change the logo (ensure the texture has no background).
     - `Megaphone Colors`: Adjust colors and apply changes.
   - For `Custom Mesh (Not Recommended)`:
     - `Mesh Visual`: Adjust the mesh values as needed.
     - `Mesh Transform`: Scale or change the position of the mesh.

:::tip
For more detailed information on configuring meshes & materials, visit our [Changing Object Meshes and Materials Guide](/DevelopmentDocumentation/docs/general-concepts/objectmeshesandmaterials/).
:::

If you choose to manually change the megaphone object, ensure you select `Custom Mesh (Not Recommended)` first, then customize the mesh object as a child of the prefab and adjust materials/mesh in the Inspector.

<br/><br/>

By following these steps, you can successfully install Hash Studios Megaphone Audio and enhance your virtual events and maps with ease.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosmegaphoneaudio)** or watch the **[YouTube Tutorial](https://youtu.be/-_YQxw9RZ3A)**.

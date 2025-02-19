---
title: ParGUI
sidebar_position: 10
---

# Installing ParGUI

:::warning

**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.

:::

ParGUI is the ultimate game-changer for your local-world experiences, allowing users to customize their in-game experiences like never before. This guide will walk you through the installation process for ParGUI.

With its user-friendly interface, you can effortlessly modify the skybox, sky color, overall color, bloom, and darkness in your local virtual world with just a few clicks.

ParGUI also features a preset button section, where you can easily switch between different scenarios to create your perfect virtual experience. Additionally, ParGUI offers a player settings menu, enabling you to adjust your player's gravity, jump height, running speed, walking speed, and strafe speed for the ultimate playing experience. Plus, if you want to join your friends in their world, ParGUI includes a teleportation feature that allows you to instantly transport to any of the first 12 players who have joined the world.

<br/>

## Features

- PC & Quest Support
- 10+ UdonSharp Scripts
- 30+ Interactable Buttons
- 4 Interactive Menus
- Change World Settings
- Change Player Settings
- Teleport to 12 Players

<br/>

## VR Showcase World

Experience ParGUI for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_a4ef1792-d405-4c16-af59-bd45f48b12a0)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download the ParGUI prefab from our website.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Set Up the Spawn Location**

1. Open the `VRCSceneDescriptor` in your world.
2. Set the spawn location to the area where you want players to spawn.

<br/>

**3. Reference the Camera**

1. Find the camera in your world you want players to use (usually called `Main Camera`).
2. Ensure it is referenced in your `VRCSceneDescriptor` as the camera that your players will use:
   - Select the `VRCSceneDescriptor` GameObject in the Hierarchy window.
   - In the Inspector window, assign the main camera to the `Reference Camera` field.

<br/>

**4. Set Up Post Processing**

1. Add a post processing layer component to your reference camera:
   - In the Hierarchy window, select your main camera.
   - In the Inspector window, click `Add Component` and search for `Post-process Layer`.
   - Set the layer to `Default` or `Everything`.

For detailed instructions on setting up post processing, refer to the **[Post Processing Guide](/docs/general-concepts/postprocessing)**.

<br/>

**5. Add ParGUI Prefab to Your World**

1. Drag the ParGUI prefab into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.
3. Set the respawn location as your spawn transform in the VRC Scene Descriptor from earlier.
4. Set a main world light as the world's directional light. If you don't want to use a directional light, set it as a directional light that is disabled in the hierarchy (it still needs a reference of some sort to function).

<br/>

**6. Configure Toggles and Lights**

1. Set up colliders you want to be able to toggle with the menu in the `Colliders` array.
2. Set up lights in the `Lighting` array that you want to be able to toggle.

<br/>

**7. Customize Preset Visual Buttons**

1. In the script below the prefab, you can customize the visual buttons to anything you want.

<br/><br/>

By following these steps, you can successfully install ParGUI and provide an immersive, customizable experience for your virtual world.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/pargui/instructions)** or watch the **[YouTube Tutorial](https://youtu.be/q-F4nQzk-_w)**.


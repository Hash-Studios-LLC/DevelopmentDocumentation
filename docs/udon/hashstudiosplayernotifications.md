---
title: Hash Studios Player Notifications
sidebar_position: 10
---

# Installing Hash Studios Player Notifications

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing Hash Studios Player Notifications — Enhance your UdonSharp worlds with interactive, dynamic notifications!

Hash Studios Player Notifications is a cutting-edge prefab designed to bring your VR environments to life. This innovative tool generates real-time notifications when players join or leave, complete with customizable particle effects, audio, and text.

Tailor everything from the notification's appearance to its behavior, ensuring a perfect fit for your virtual world. With its user-friendly design, adding a layer of interactivity to your UdonSharp worlds has never been easier!

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/O7Unqx10lTs" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- Join / Leave Notifications
- Customizable Particle Effects
- Player Tracking Functionality
- Custom Audio Alerts
- Adaptive Player Size Scaling
- Versatile Particle and Text Customization

<br/>

## VR Showcase World

Experience Hash Studios Player Notifications for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_6916c9b9-36d0-4bd0-b17f-2dbe3e0a0803)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Player Notifications from our **[website](https://www.hashstudiosllc.com/hashstudiosplayernotifications)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Player Notifications into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Select Hash Studios Player Notifications**

1. Select Hash Studios Player Notifications in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Player Notifications.

<br/>

**4. Edit General Settings**

In the `General Settings` menu, you can modify the general settings of the notification:

- `Showcase Length` - Value of how long the notification and its particle effect will show.
- `Text Color` - This is the color of the text that will be displayed by the notification.
- `Text Position` - This dropdown offers a selection of preset text alignments for your notifications. You can also choose to customize its position and alignment manually:
  - Middle-Center (Default)
  - Upper-Left
  - Middle-Left
  - Lower-Left
  - Upper-Right
  - Middle-Right
  - Lower-Right
  - Manual

- `Particle Preset Effects` - This dropdown offers a selection of preset particles for enhancing your notification system with cool effects. You also have the option to use a custom particle system or disable it altogether:
  - Basic Stars (Shows an explosion of stars)
  - Dust Particles (Shows falling dust particles surrounding the player)
  - Falling Leaves (Shows leaves falling around the player)
  - Fog Smoke (Shows a gust of foggy smoke)
  - Custom Particle (Advanced) - Lets you set what kind of particle to be displayed (for advanced users who know how to use particles)
  - Invisible (Nothing) - Doesn't display any kind of particle

If you select one of our presets, you will have the following options:
:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/docs/general-concepts/unityspriteconversion/).
:::
- `Particle Texture` - This is the texture that will be displayed on this particle effect.
- `Texture Color` - This is the color of the texture that will be used in the particle effect.
- `Variable Reset Button` - This button resets the texture and color of this particle effect to its default values.

<br/>

**5. Edit Join and Leave Settings**

In the `Join and Leave Settings` section, you can adjust settings for notifications when a player joins or leaves:

- `Player Join Text` - This is the text that will appear in the notification when a player joins.
:::important
Please use `[Player]` to indicate where you want the player's username to appear.

<details>
<summary>Example Adding Player's Usernames</summary>

Assuming your player's username is MyName, `[Player] joined the lobby` as the string would look like `MyName joined the lobby`.
</details>
:::

- `Player Leave Text` - This is the text that will appear in the notification when a player leaves.
:::important
Please use `[Player]` to indicate where you want the player's username to appear.

<details>
<summary>Example of Adding Player's Usernames</summary>

Assuming your player's username is MyName, `[Player] left the lobby` as the string would look like `MyName left the lobby`.
</details>
:::

- `Player Join Audio` - This is the audio that will play when a player joins the world.
- `Player Leave Audio` - This is the audio that will play when a player leaves the world.
- `Join Notification Toggle` - This toggle determines when a player joins the world. If disabled, no notification will be shown for this event.
- `Leave Notification Toggle` - This toggle determines when a player leaves the world. If disabled, no notification will be shown for this event.

<br/>

**6. Edit Advanced Settings**

In the `Advanced Settings` section, you can adjust advanced settings for the notification menu, such as whether it follows the player's head, scales with the avatar size, etc:

- `Follow Player Toggle` - This toggle decides whether the notification and particle effect will track the player's head movement. If disabled, they will simply appear in front of the player without following. You may choose to disable this feature if you think the notification could become bothersome.
- `Scale to Player Size` - This toggle determines whether the notification will adjust its size based on the player's size in the world. If your world does not permit player resizing, using this option is recommended.
- `Scale Distance Based on Size` - This toggle allows you to set the notification's distance based on the player's size, enhancing the notification experience but at the cost to optimization. If your world does not permit player resizing, using this option is recommended.

<br/><br/>

By following these steps, you can successfully install Hash Studios Player Notifications and enhance your VR environment with interactive, dynamic notifications.

For more detailed information and resources, visit the **[Official Website](https://www.hashstudiosllc.com/hashstudiosplayernotifications)** or watch the **[YouTube Tutorial](https://youtu.be/O7Unqx10lTs)**.

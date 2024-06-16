---
title: Hash Studios Admin Ban Menu
sidebar_position: 10
---

# Installing Hash Studios Admin Ban Menu

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing Hash Studios Admin Ban Menu—a powerful Udon Unity prefab designed for community hosts and club owners to effectively manage players in their VR world. With an array of robust features, this menu ensures smooth and secure player interactions.

Hash Studios Admin Ban Menu grants admins the ability to interact with players based on their role (player, admin, or yourself), with customizable colors for each role: Admins (dark blue), selected players (light cyan), banned players (red), and normal players (grey). Tailor these settings to fit your unique needs.

This comprehensive menu offers various functionalities such as:
- View player avatars and rank status
- Access a player's point of view
- Teleport to players or bring players to your location
- Only admins can see and use this menu, ensuring secure management
- Banish disruptive players to a designated area, ensuring they remain isolated from the main area
- Easily unban players to return them to the normal respawn location
- Manage player movements by mobilizing or immobilizing them
- Automatically grant admin rights to instance masters if toggled
- Disable admin abilities towards one another to prevent conflicts

Enhance your VR world's management capabilities with Hash Studios Ban Menu—your ultimate solution for efficient and secure player administration.

<br/>

## Features

- Role-based player management
- Customizable colors for roles
- Viewing player avatars and ranks
- Teleportation options for players
- Ban and unban players with ease
- Mobilize or immobilize players
- Easy installation process

<br/>

## VR Showcase World

Experience Hash Studios Ban Menu for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_1e9b4acc-d908-4838-8ed9-66953c902414)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Admin Ban Menu from our **[website](https://hashstudiosllc.com/hashstudiosadminbanmenu)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Admin Ban Menu into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Configure Hash Studios Admin Ban Menu**

1. Select Hash Studios Admin Ban Menu in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Admin Ban Menu.

<br/>

**4. Player Whitelist**

1. Specify which players are admins by adding their usernames to the `Player Whitelist`. Admins are the only ones who can see the prefab and manage players.

<br/>

**5. General Settings**

1. Define the `Respawn Location`, where players are teleported when respawned.
:::warning
If this is not your spawn location in your world, the prefab will not function properly.
:::
2. Define the `Teleport Location`, where banned players are teleported.
:::warning
Make sure it is in an actual room and not an area that would crash the user or go against VRChat's terms.
:::
3. Configure other general settings like `Make Instance Master Admin`, `Allow TP Here for Admins`, `Allow Respawn for Admins`, and `Allow Immobilization for Admins`.

<br/>

**6. Customization**

1. Customize the colors for each role. There are four color sets available for three roles: admin, banned player, normal player, as well as a color for selected players.
   - `Default Player Button Background` (default: grey)
   - `Default Player Button Text` (white)
   - `Selected Player Button Background`
   - `Selected Player Button Text`
   - `Admin Player Button Background`
   - `Admin Player Button Text`
   - `Banned Player Button Background`
   - `Banned Player Button Text`

<br/><br/>

By following these steps, you can successfully install Hash Studios Admin Ban Menu and enhance the management of your VR world with secure and efficient player administration.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosadminbanmenu)** or watch the **[YouTube Tutorial](https://youtu.be/HQm-S3oNZWc)**.

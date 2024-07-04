---
title: Understanding Unity Layers with Udon
sidebar_position: 11
---

# Understanding Unity Layers with Udon

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Layers in Unity are essential for organizing and managing the visibility and interactions of GameObjects. In VRChat (VRC), layers play a crucial role in ensuring that mirrors and other elements function correctly. This guide will help you understand what layers are, how they function, their importance in VRChat, and how to configure them for optimal performance.

<br/>

## What are Layers?

Layers are a way to categorize and group GameObjects in Unity. They allow you to manage which objects are rendered, detect collisions, and control interactions within the game. Layers help in optimizing performance and organizing your project.

### How Do Layers Function?

- **Rendering:** Layers can be used to control which objects are visible to specific cameras or in mirrors. By selecting layers for a camera to render, you can improve performance and manage what the player sees.
- **Collisions:** Layers can be used in collision detection to specify which objects should interact with each other. For example, you can set certain layers to ignore collisions with others.
- **Interactions:** Layers can help manage various interactions within the game, such as triggers and physics.

<br/>

## How Layers Work in VRChat

In VRChat, layers are used to manage what gets reflected in mirrors and what gets detected by various systems. Properly setting up layers is essential for ensuring that all players and objects are displayed correctly.

### Importance of Layers in VRChat

- **Player Visibility:** Layers like "Player" and "PlayerLocal" represent avatars. Configuring these layers ensures that mirrors reflect all players correctly.
- **Optimization:** By managing layers, you can optimize performance by rendering only necessary objects.
- **Interaction Management:** Layers help in managing interactions such as collision detection and trigger zones.

For more detailed information on layers in VRChat, you can refer to the [original VRChat documentation on layers](https://creators.vrchat.com/worlds/layers/).

<br/>

## How Mirrors Use Layers

Mirrors in VRChat use layers to determine which objects are reflected. By default, mirrors may not reflect all players, leading to visibility issues. Properly setting up layers ensures that mirrors show everyone in the scene accurately.

### Configuring Layers for Mirrors

:::tip
Our mirror related prefabs, including the `Hash Studios Mirrors`, use layers for reflection. For more details, see the [Hash Studios Mirrors](https://hashstudiosllc.com/hashstudiosmirrors) documentation.
:::

To ensure that mirrors in VRChat work correctly and display all players, you need to configure the VRC layers properly:

1. **Add the VRC Mirror Prefab:**
   - In the VRChat SDK, find the VRC Mirror Prefab.
   - Drag the VRC Mirror Prefab into your scene.

2. **Configure Mirror Settings:**
   - Select the VRC Mirror Prefab in the Hierarchy.
   - In the Inspector window, locate the `VRC Mirror Reflection` component.
   - In the `Reflect Layers` dropdown, make sure to select both `Player` and `Player Local`.

This configuration helps in rendering all the players in the mirror, providing a more immersive experience.

<br/>

## Bug Fix: Multiple Players Not Visible

If you encounter an issue where multiple players are not visible in the mirror, follow these steps to fix it:

1. Ensure that the "Player" and "PlayerLocal" layers are correctly set up as mentioned in the configuring layers section.
2. Select the VRC Mirror Prefab in the Hierarchy.
3. In the Inspector window, find the `VRC Mirror Reflection` component.
4. In the `Reflect Layers` dropdown, make sure to select both `Player` and `Player Local`.

By doing this, you ensure that the mirror can render multiple players correctly, solving the visibility issue. This setup helps create a more immersive and accurate reflection experience in your VR environment.

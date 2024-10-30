---
title: Hash Studios Swimming System
sidebar_position: 10
---

# Installing Hash Studios Swimming System

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

The **Hash Studios Swimming System** is a powerful and modular swimming system designed for Udon creators, offering fluid underwater mechanics and real-time water detection. With built-in features like configurable audio, gravity control, and debug options, it enhances the player's experience in VRChat worlds. This guide provides an overview of the system's functionality, configuration, and installation steps.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/bWR7WzTJikI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- **Head & Feet Detection:** Automatically switches between swimming and ground-based movement based on player position.
- **Underwater Audio Effects:** Plays ambient soundtracks when underwater for immersion.
- **Modular Design:** Works seamlessly with any Udon VR world.
- **Performance Optimization:** Designed to run efficiently in multiplayer environments.
- **Debug Mode:** Test and adjust swimming parameters in real-time during development.

<br/>

## VR Showcase World

Experience the **Hash Studios Swimming System** in action:  
**[VRChat Showcase World](https://vrchat.com/home/world/wrld_db0aeaaf-f20d-4dc9-800d-0a59e244635f)**

<br/>

## Requirements

Ensure your Unity project is properly set up by following our **[project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## How the Swimming System Works

The system uses **raycasts** to detect whether the player’s head or feet are in water. When the feet enter a water body, swimming mode is activated. If the player's head is submerged, underwater audio and visual effects trigger. 

If either the head or feet leave the water, the system resets to ground movement settings and deactivates underwater effects. These seamless transitions allow for a smooth experience between swimming and walking.

- **Feet Detection:** Triggers swimming mode when the player steps into water.
- **Head Detection:** Activates underwater effects when fully submerged.
- **Movement Calculation:** Player velocity adapts based on input (e.g., jump) and water resistance, ensuring realistic underwater movement.

<br/>

## Configuration Options

The **`U_HashStudiosSwimmingSystem_Main`** script offers several variables to customize your swimming experience:

| **Parameter**               | **Description**                                              |
|-----------------------------|--------------------------------------------------------------|
| **underWaterWalkSpeed**      | Adjusts walking speed underwater.                            |
| **underWaterRunSpeed**       | Controls running speed underwater.                           |
| **underWaterStrafeSpeed**    | Determines the player’s strafe speed underwater.             |
| **underWaterJumpImpulse**    | Sets how high players can jump in water.                     |
| **underWaterGravity**        | Controls sinking/floating speed.                             |
| **swimmingVelocityMod**      | Adjusts swimming speed multiplier.                           |
| **swimmingVelocityVerticalMod** | Controls upward/downward swimming speed.                 |
| **waterJumpMod**             | Boosts jump height near the water surface.                   |
| **debugMode**                | Enables real-time parameter adjustments.                    |

### Example Adjustments

- **Gravity Settings:** Lower gravity for a buoyant experience, or increase it for realistic sinking.
- **Run/Walk Speed:** Use higher speeds for arcade-style swimming or realistic speeds for immersion.
- **Water Jump Mod:** Increase if players struggle to exit pools.

<br/>

## Installation Steps

### 1. Download and Import the Prefab

1. Download the **Hash Studios Swimming System** from our **[website](https://hashstudiosllc.com/prefabname)**.
2. Import the package into Unity:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`.
   - Select the downloaded prefab package.
   - Click **Import**.

### 2. Add the Prefab to Your World

1. Drag the **Swimming System** prefab into your world from the **Project** window.
2. In the **Hierarchy** window, right-click the prefab and select `Prefab > Unpack Prefab`.

### 3. Configure the Prefab

1. Select the prefab in the **Hierarchy**.
2. In the **Inspector** window, adjust key parameters:
   - **Assign Audio Sources:** Add entry sounds and underwater ambiance.
   - **Set Gravity and Speed:** Customize movement settings for your world.
   - **Enable Debug Mode:** Use debug mode to tweak parameters without restarting the scene.

For more information about setting up **triggers and colliders**, refer to our **[Trigger & Box Collider Guide](/docs/general-concepts/triggerbox/)**.

<br/>

## Swimming Controls and Player Interaction

The system offers intuitive swimming controls, whether the player is using VR or desktop mode:

- **Jumping in Water:** Press the jump button to ascend.
- **Movement Direction:** Swimming direction is determined by the player’s head orientation. Move forward, backward, left, or right using the assigned inputs (e.g., arrow keys, controller stick, or other mapped controls).
- **Real-Time Velocity Management:** Player velocity is continuously adjusted based on water resistance and gravity to ensure a natural feel.

<br/>

## Troubleshooting

- **Players Can’t Jump Out of Water:** Increase the **`waterJumpMod`** value for more surface jump impulse.
- **Underwater Audio Not Playing:** Ensure the **`underWaterAudio`** source is assigned correctly.
- **Swimming Feels Too Slow:** Adjust **`swimmingVelocityMod`** or **`underWaterRunSpeed`**.

<br/>

By following these steps, you’ll successfully integrate the **Hash Studios Swimming System** into your VRChat world, providing players with immersive underwater movement and audio effects. 

For additional resources, visit the **[Official Website](https://hashstudiosllc.com/prefabname)** or watch the **[YouTube Tutorial](#)** (coming soon).

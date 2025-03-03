---
title: Hash Studios Footsteps
sidebar_position: 10
---

# Installing Hash Studios Footsteps

:::warning
**Version:** This guide is for Unity 2022.3.22f1. The steps may be different in future versions of Unity.
:::

## Welcome to the Hash Studios Footsteps Showcase!

**Hash Studios Footsteps** is a Unity Udon prefab that enhances your world by adding immersive, dynamic footstep sounds. Whether you’re walking on wood, metal, or gravel, the sounds adapt to your movement and environment.

This prefab brings footsteps to life with both local and networked audio. You’ll hear your own steps, as well as those of nearby players, making movement feel more natural. Different surfaces—like grass, concrete, or water—play distinct footstep sounds, ensuring an immersive experience.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/sbvXVw9r-xY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/> <br/>

## Features

- **Dynamic Surface Detection** – Automatically plays the correct footstep sounds based on the ground material.
- **Local & Networked Audio** – Supports footstep sounds for the local player and other players in the world.
- **Customizable Footstep Presets** – Includes a variety of default footstep sounds, with the option to add custom presets.
- **Adjustable Playback Settings** – Configure footstep volume, playback speed, and networked sound priorities.
- **Jump & Landing Sounds** – Optional jump and landing effects for more realistic movement audio.
- **Networked Optimization** – Distance-based footstep prioritization to manage concurrent audio sources efficiently.

<br/> <br/>

## VR Showcase World

Experience **Hash Studios Footsteps** for yourself here: 
**[VRChat Showcase World](https://vrchat.com/home/world/wrld_bb8d47d2-79ea-4a1a-bac4-1386547f36be/info)**

<br/> <br/>

## Requirements

Before installing, ensure your project is set up correctly by following **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/> <br/>

## Installation Steps

### **1. Download and Import the Prefab**

<br/>

1. Download **Hash Studios Footsteps** from our **[website](https://hashstudiosllc.com/hashstudiosfootsteps)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

### **2. Add the Prefab to Your World**

1. Drag **Hash Studios Footsteps** into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

### **3. Configure Footstep Settings**

1. Select **Hash Studios Footsteps** in your Hierarchy.
2. In the Inspector window, configure the following options...

Below are the **editable settings** available in each category:

<br/>

#### **General Settings**
Controls the core functionality of the footstep system.

- **`velocityToPlayFootsteps`** – Minimum movement speed required to trigger footstep sounds.
- **`maxPlayerVelocity`** – Maximum player movement speed used to calculate footstep sound intervals and volume.
- **`groundLayers`** – Specifies which layers are recognized as ground for triggering footsteps.
- **`fallbackFootstepPreset`** – The default preset used when no specific footstep preset is detected.

<br/>

#### **Footstep Presets**
Allows customization of different surface sounds.

- **`footstepMaterial`** – Defines the surface type (PhysicMaterial).
- **`footstepClips`** – Audio clips that play when walking on this surface.
- **`jumpingClips`** – Clips that play when jumping.
- **`landingClips`** – Clips that play when landing.
- **`volume`** – Adjusts the overall volume of footstep sounds for this preset.
- **`minStepInterval / maxStepInterval`** – Controls how frequently footsteps play on this surface.
- **`minMaxPitch`** – Defines pitch variation for the footstep sounds.
- **`disableJumpAndLandDetection`** – Disables jump and landing sounds for this preset.

<br/>

#### **Customization Settings**
Configures local footstep behavior.

- **`baseLocalFootstepVolume`** – Adjusts the volume of the player’s footsteps.
- **`FootstepSpeedCurve`** – Controls how often footsteps play based on player movement speed.
- **`FootstepVolumeCurve`** – Adjusts footstep volume dynamically based on speed.

<br/>

#### **Networked Footstep Settings**
Manages footsteps from other players.

- **`enableNetworkedFootsteps`** – Toggles footstep sounds from networked players.
- **`networkedFootstepVolume`** – Adjusts the volume of footstep sounds from networked players.
- **`enableNetworkDistanceCheck`** – Enables prioritization of closer player footsteps.
- **`maxNetworkedFootstepDistance`** – The maximum distance within which networked footstep sounds can be heard.
- **`maxFootstepsPlaying`** – Limits the number of simultaneous networked footstep sounds for performance optimization.

<br/>

#### **Landing Sound Settings**
Controls how landing sounds are triggered.

- **`airtimeBeforeLandingSound`** – Minimum time the player must be airborne before a landing sound is played.
- **`velocityToPlayOptionalLandingSound`** – Minimum falling velocity required to trigger an optional landing sound.

<br/>

### **4. Assigning a Footstep Preset to an Object**

1. **Select the object** in **Unity**.
2. **Add a Collider** (e.g., Box Collider).
3. **In the Inspector, find the Material field** under the collider settings.
4. **Set the PhysicMaterial** to the name of the preset you want.
5. The correct footstep sound will now play when a player walks on the object.


<br/><br/>

By following these steps, you can successfully install **Hash Studios Footsteps** and enhance the realism of your VRChat world with dynamic footstep sounds.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosfootsteps)** or watch the **[YouTube Tutorial](https://www.youtube.com/watch?v=sbvXVw9r-xY)**.

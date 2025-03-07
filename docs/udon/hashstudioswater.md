---
title: Hash Studios Water
sidebar_position: 10
---

# Installing Hash Studios Water

:::warning

**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.

:::

:::note

**Important:** This prefab is only compatible with PC or PC VR and does not work on Android / Quest platforms.

:::

Hash Studios Water is a developer tool that makes it easy for world creators to mimic the vision of being underwater. This guide will walk you through the installation process for Hash Studios Water.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/87vhzI15c48" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download the Hash Studios Water prefab from our website.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

1. Drag the prefab into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

**2. Set Up Water Zones**

:::tip
For more detailed information on configuring Trigger Boxes, visit our [Trigger & Box Collider Guide](/docs/general-concepts/triggerbox/).
:::

1. Find a collider you want to use as a water zone and make it a trigger collider:
   - Select the GameObject with the collider in the Hierarchy window.
   - In the Inspector window, check the `Is Trigger` box under the collider component.
2. Add any colliders to the Hash Studios Water prefab to define the areas where the "water" effect should be applied.

**3. Reference the Camera**

1. Find the main camera in your world.
2. Ensure it is referenced in your `VRCSceneDescriptor` as the camera that your players will use:
   - Select the `VRCSceneDescriptor` GameObject in the Hierarchy window.
   - In the Inspector window, assign the main camera to the `Reference Camera` field.

**4. Set Up Post Processing**

:::tip
For more detailed information on configuring Post Processing, visit our [Post Processing Guide](/docs/general-concepts/postprocessing/).
:::

1. Set up a `post processing layer` component on the main camera and set it to default.

**5. Test the Underwater Effect**

1. Enter the trigger box you added to the prefab. When your head is under the water, you should see the underwater visual effect.

<br/><br/>

By following these steps, you can successfully install Hash Studios Water and create immersive underwater experiences in your virtual world.

For more detailed information and resources, visit the [Official Website](https://hashstudiosllc.com/hashstudioswater) or watch the [YouTube Tutorial](https://www.youtube.com/watch?v=87vhzI15c48).

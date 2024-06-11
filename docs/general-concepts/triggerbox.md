---
title: Understanding Colliders and Trigger Boxes
sidebar_position: 11
---

# Understanding Colliders and Trigger Boxes

:::warning

**Important:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.

:::

:::tip
Many of our prefabs, including the `Hash Studios Information Board`, use colliders and trigger boxes for detecting interactions. Understanding how to add, configure, and resize trigger boxes is essential for making the most of these prefabs. For more details, see the [Hash Studios Information Board](https://hashstudiosllc.com/hashstudiosinformationboard) documentation.
:::

:::note
Learning how to edit colliders and trigger boxes is crucial for setting up a variety of our prefabs that rely on detection for functionality. Proper configuration ensures that interactions within your virtual world work smoothly and as intended.
:::

In Unity, colliders and trigger boxes are essential for creating interactive and dynamic environments. They help detect interactions between objects, making them useful for various applications like triggering events and detecting player presence.

<br/>

## What is a Collider?

A collider is an invisible shape that defines the boundaries of an object for physical interactions. Colliders detect when objects come into contact with them.

### Box Collider

A Box Collider is a simple, box-shaped collider. It is one of the most commonly used colliders and is ideal for rectangular or cubic objects.

<br/>

## What is a Trigger Box?

A trigger box is a special type of collider that detects when another object enters, exits, or stays within its boundaries. Trigger boxes do not cause physical collisions but can trigger events.

<br/>

## Adding and Configuring Colliders in Unity

### Adding a Box Collider

1. **Select the Object:**
   - Click on the object in the Hierarchy window.
2. **Add Component:**
   - In the Inspector window, click `Add Component`.
   - Search for `Box Collider` and select it.

### Enabling a Trigger Box

1. **Select the Object:**
   - Click on the object in the Hierarchy window.
2. **Add Component:**
   - In the Inspector window, click `Add Component`.
   - Search for `Box Collider` and select it.
3. **Enable Trigger:**
   - In the Inspector, check the `Is Trigger` checkbox.

### Resizing the Trigger Box

1. **Select the Trigger Box:**
   - Go to the child object named `TriggerBox`.
2. **Adjust the Size:**
   - In the Inspector, find the `Box Collider` component.
   - Click the `Edit Collider` button.
   - Use the handles to resize the trigger box as needed.

<br/>

## Using Colliders and Triggers in Prefabs

We use colliders and trigger boxes in our prefabs to detect interactions. For example, our `Hash Studios Information Board` prefab uses a trigger box to display information when a player enters a specific area. 

You can find more details in the **[Hash Studios Information Board](/TestDocumentation/docs/udon/hashstudiosinformationboard)** documentation.

<br/>

## Example Usage in Our Prefabs

In the `Hash Studios Information Board` prefab, the trigger box detects when a player enters an area to display information. Here’s a simple setup guide:

1. **Select the Trigger Box:**
   - Go to the child object named `TriggerBox`.
2. **Adjust the Trigger Box:**
   - Move it around using the `Transform` component.
   - Resize it using the `Box Collider` component by pressing the `Edit Collider` button.
3. **Configure the Trigger:**
   - Set how the information board should appear (e.g., on trigger, timed, or always visible).

<br/>

## Unity Documentation for Reference

For more detailed information on colliders and triggers, refer to the official Unity documentation:
- [Unity Collider Documentation](https://docs.unity3d.com/Manual/CollidersOverview.html)
- [Unity Box Collider Documentation](https://docs.unity3d.com/Manual/class-BoxCollider.html)

<br/>

## VRChat OnTrigger Events

In VRChat, OnTrigger events are used to detect when players interact with trigger boxes. For detailed instructions and examples, refer to the [VRChat OnTrigger Events Documentation](https://creators.vrchat.com/worlds/udon/players/player-collisions/).

<br/><br/>

By following these steps, you can effectively use colliders and trigger boxes in Unity to create interactive and dynamic environments in your VRChat worlds.

For further assistance, consult the [Unity Collider Documentation](https://docs.unity3d.com/Manual/CollidersOverview.html) and the [VRChat OnTrigger Events Documentation](https://creators.vrchat.com/worlds/udon/players/player-collisions/).
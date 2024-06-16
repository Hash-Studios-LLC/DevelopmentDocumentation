---
title: Values Not Updating & Errors When Clicking Prefab
sidebar_position: 11
---

# Values Not Updating & Errors When Clicking Prefab

If you're having trouble with values not updating or seeing errors when you click on a prefab in Unity, this guide will help you understand why these issues occur and how to fix them. We'll explain what unpacking a prefab means, why it's important, and how to do it.

<br/><br/>

## What is a Prefab?

A prefab in Unity is like a template for a GameObject. It lets you create multiple copies of that object with the same settings. However, sometimes you need to change these settings for just one copy, and that's where unpacking comes in.

<br/><br/>

## What Does Unpacking a Prefab Do?

Unpacking a prefab means turning the prefab instance into a regular GameObject. This allows:

- **Customization:**
   - Make specific changes to that instance without affecting the original template.
<br/>
- **Functionality:** 
   - Ensure custom editor scripts and features work properly.
<br/>
- **Stability:** 
   - Avoid errors that can happen when modifying a prefab directly.

<br/><br/>

## Why Unpacking is Important

:::warning
If you don't unpack your prefab, certain changes you make might not work correctly. 
:::

This is because the prefab is still linked to its original template, which can prevent some modifications from taking effect.

<br/><br/>

## How to Unpack a Prefab

1. Add the Prefab to Your Scene
   1. Drag the prefab from the Project window into your scene. This creates an instance of the prefab in your scene.

2. Unpack the Prefab

   1. In the Hierarchy window, right-click the prefab instance.
   2. Select Prefab > Unpack Prefab. The instance is now a regular GameObject that you can modify.

<br/><br/>

## Common Issues and Solutions

### Values Not Updating

**Problem:** 
You change a value in the prefab, but it doesn't update in your scene.

**Solution:**
1. Make sure the prefab instance is unpacked.
2. Change the values on the unpacked instance in the Hierarchy.
3. Changes should now update immediately.

<br/>

### Errors When Clicking on Prefab

**Problem:** 
You get errors or warnings when you select a prefab in the Project or Hierarchy window.

**Solution:**
1. Unpack the prefab as described above.
2. Check for missing scripts or components.
3. Ensure all necessary assets and dependencies are imported into your project.

<br/>

### Custom Editors Not Working

**Problem:** 
Our custom editors included in the prefab don't display or function correctly.

**Solution:**
1. Make sure the prefab is added to the scene and unpacked.
2. Custom editors work with unpacked GameObjects in the scene, not with prefab assets directly.
3. Verify you have the correct Unity version and all required packages installed.

<br/><br/>

## Need More Help?

For more support, follow our **[General Troubleshooting Guide](/docs/troubleshooting/introduction/)**. This provides additional steps and resources to help resolve issues.

By following these instructions, you can avoid common problems and ensure your prefabs work correctly in Unity.

<br/>
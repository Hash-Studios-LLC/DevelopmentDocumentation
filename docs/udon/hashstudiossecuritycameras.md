---
title: Hash Studios Security Cameras
sidebar_position: 10
---

# Installing Hash Studios Security Cameras

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Hash Studios Security Cameras is a Udon Unity prefab offering a comprehensive camera system for VR world creators. It's the perfect tool for event hosts, world creators, and community managers seeking to elevate their virtual environments.

At the heart of this system is an intuitive camera menu, designed for seamless monitoring of various cameras and players within the VR world. With user-friendly interactive buttons, users can effortlessly teleport to different player or camera locations, enhancing both control and engagement.

Our cameras stand out with their unique interactive capabilities. One notable feature is the light activation button, ensuring optimal visibility in diverse environments. Additionally, the cameras offer adjustable rotation controls for a comprehensive range of viewing angles, ensuring no detail goes unnoticed. The Field of View (FOV) slider is a key component, providing users with the ability to fine-tune their zoom, guaranteeing extensive coverage of every corner of your virtual domain.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/saoxye1qoZk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- Real-Time Surveillance
- Camera Rotation
- Teleportation Feature
- Multiple Models
- Custom Mesh Use

<br/>

## VR Showcase World

Experience the Hash Studios Security Cameras for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_53c61ff4-fcc3-439e-994c-7d403ee93700)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## How to Use Hash Studios Security Cameras

The camera menu is the main interface for interacting with Hash Studios Security Cameras. It allows you to switch between different camera views, teleport to specific locations, and control various camera settings.

1. **Open the Camera Menu**: In your VR world, access the camera menu through the designated UI button or interaction method.
2. **Select a Camera**: Browse through the list of available cameras in the camera menu. Cameras listed here are those added to the `Camera List` in the Manager Asset.
3. **View Camera Feed**: Click on a camera name to view its live feed. The feed will display the current view from the selected camera.
4. **Teleport to Camera**: Use the teleport button to instantly move your avatar to the location of the selected camera.
5. **Control Camera Settings**:
   - **Light Activation**: Toggle the camera light on or off to improve visibility in dark areas.
   - **Rotate Camera**: Use the rotation controls to adjust the camera's viewing angle.
   - **Field of View (FOV) Slider**: Adjust the FOV slider to zoom in or out, providing either a detailed view or a broader perspective of the area.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Security Cameras from our **[website](https://hashstudiosllc.com/hashstudiossecuritycameras)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

1. Drag the `Hash Studios Security Cameras (Manager Asset)` prefab into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

### Manager Asset Configuration

The `Manager Asset` is the central hub for controlling all cameras in the system. It allows you to add, remove, and configure cameras within your VR world.

1. Select the Manager Asset prefab in your Hierarchy.
2. In the Inspector window, you will see the configuration options for the Manager Asset.
3. Inside the `Camera List` section, you can add any cameras in the world or find existing ones.

:::note
Cameras must be listed in this section to appear in the prefab's UI.
:::

4. Inside the `Camera Prefabs` section, you have the ability to spawn a variety of preset cameras:
- `Spawn Head Camera`
- `Spawn Head & Base Camera`
- `Spawn Table-Mounted Camera`
- `Spawn Wall-Mounted Camera`
- `Spawn Custom Mesh Camera`
- `Spawn Invisible Camera (No Mesh)`

:::info
<details>
<summary>Types of Cameras</summary>
- `Head Camera`: A basic camera that can be placed anywhere.
- `Head & Base Camera`: A camera with a base for more stable placement.
- `Table-Mounted Camera`: A camera with a long-ground-mounted base, ideal for placing on flat surfaces like tables.
- `Wall-Mounted Camera`: A camera with a long-side-mounted base, perfect for mounting on walls for a higher viewpoint.
- `Invisible (No Mesh)`: A camera with no visible mesh, useful for hidden surveillance.
</details>
:::

<br/>

### Camera Asset Configuration

The `Camera Asset` is the individual camera unit that you will place and configure in your VR world.

#### Customizing Camera Settings

After spawning your chosen camera, you can move it around and use the inspector to customize its settings. Within the `Camera Settings` section, you can personalize your camera by setting its display name in the UI, choosing a teleport destination, and selecting specific lights to enable or disable when toggling them on or off while viewing through that camera.

- `Camera Name`: The camera name you choose will appear on the camera menu, helping you to identify this specific camera. Please use a short name for easy recognition.

- `Teleport Location`: This defines the teleport location for this camera. When you press the teleport button on the camera system menu, you will be transported to this specified location. Please adjust it to your preferred destination within the camera's view.

- `Camera Light`: This is the camera light that activates when you press the light button in the camera system menu for the current camera you're viewing, helping improve visibility.

:::warning
The default setting uses a light attached to the camera itself. You have the option to change this light, but altering the default setting is not recommended.
:::

- `View Position (Advanced)`: This setting determines the position from which the camera's view will originate.

:::warning
It is strongly recommended that you do not modify this option unless you are certain of what you are doing.
:::

<br/>

### Mesh Types for Cameras

Hash Studios Security Cameras provide several predefined camera meshes for different use cases:

:::info
<details>
<summary>Types of Cameras</summary>
- `Head Camera`: A basic camera that can be placed anywhere.
- `Head & Base Camera`: A camera with a base for more stable placement.
- `Table-Mounted Camera`: A camera with a long-ground-mounted base, ideal for placing on flat surfaces like tables.
- `Wall-Mounted Camera`: A camera with a long-side-mounted base, perfect for mounting on walls for a higher viewpoint.
- `Invisible (No Mesh)`: A camera with no visible mesh, useful for hidden surveillance.
</details>
:::

<br/>

### Using Custom Meshes

:::tip
For more detailed information on configuring meshes & materials, visit our [Changing Object Meshes and Materials Guide](/DevelopmentDocumentation/docs/general-concepts/objectmeshesandmaterials/).
:::

If you opt to use your own custom mesh, you can easily set and modify its visuals directly within the inspector.

1. Spawn a camera with the `Custom Mesh` option.
2. An orange cube will appear, indicating the position and orientation of your custom mesh.
3. Adjust your custom mesh in the inspector to align with the orange cube.
   - Ensure the custom mesh is positioned to the left of the orange cube, based on the z-axis. This ensures it rotates and functions correctly within the prefab.

<br/>

### Removing Player View (Additional)

:::danger WAIT! PLEASE READ!
**Note:** This modification is *not required* and should *only* be performed if you specifically need to remove the player view feature. 

It is not recommended unless you are confident in your changes.
:::

To remove the ability to view players in the camera system, follow these steps:

<br/>

1. Open the Script:
   - Navigate to `Assets > Hash Studios Security System > Scripts`.
   - Open `HashStudiosSecuritySystem_Internal.cs` in your preferred code editor.

   <br/>

2. Locate the Methods:

   - Find & replace the InitialPopulateMenuOptions method with the following:

   <br/>
   ```csharp
   void InitialPopulateMenuOptions()
   {
      listOfCameras = new GameObject[mainScript.SecurityCameras.Length];
      listOfCameras[0] = cameraListName_ToDuplicate.gameObject;
      listOfCameras[0].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = mainScript.SecurityCameras[0].cameraName;
      for (int i = 1; i < mainScript.SecurityCameras.Length; i++)
      {
         listOfCameras[i] = Instantiate(cameraListName_ToDuplicate.gameObject, cameraListView_Parent.transform);
         listOfCameras[i].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = mainScript.SecurityCameras[i].cameraName;
      }
   }
   ```

   <br/>
   - Find & replace the UpdateMenuOptions method with the following:

   <br/>
   ```csharp
   private void UpdateMenuOptions()
   {
      GameObject[] gameObjects = listOfCameras;
      listOfCameras = new GameObject[mainScript.SecurityCameras.Length];
      listOfCameras[0] = cameraListName_ToDuplicate.gameObject;
      listOfCameras[0].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = mainScript.SecurityCameras[0].cameraName;
      for (int i = 1; i < mainScript.SecurityCameras.Length; i++)
      {
         listOfCameras[i] = Instantiate(cameraListName_ToDuplicate.gameObject, cameraListView_Parent.transform);
         listOfCameras[i].transform.GetChild(0).GetComponent<TextMeshProUGUI>().text = mainScript.SecurityCameras[i].cameraName;
      }
   }
   ```

<br/><br/>

By following these steps, you can successfully install Hash Studios Security Cameras and enhance your VR environment with a robust camera system.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiossecuritycameras)** or watch the **[YouTube Tutorial](https://www.youtube.com/watch?v=saoxye1qoZk)**.

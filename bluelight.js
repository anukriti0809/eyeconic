document.addEventListener("DOMContentLoaded", () => {
    const monitors = document.querySelectorAll(".monitor");
    const colorTempSlider = document.getElementById("color-temperature");
    const brightnessSlider = document.getElementById("brightness");
    const colorTempValueLabel = document.getElementById("colorTempValue");
    const brightnessValueLabel = document.getElementById("brightnessValue");
    const selectedModeText = document.getElementById("selectedMode");
  
    // Helper function to update the slider percentage text
    function updateSliderLabels() {
      colorTempValueLabel.textContent = colorTempSlider.value;
      brightnessValueLabel.textContent = brightnessSlider.value;
    }
  
    // Function to update the preview color based on the sliders
    function updatePreview() {
      // Update the slider labels (show the current %)
      updateSliderLabels();
  
      // Get current slider values
      const colorTempValue = parseInt(colorTempSlider.value, 10); // 0..100
      const brightnessValue = parseInt(brightnessSlider.value, 10); // 0..100
  
      /*
        Using HSL to simulate warm-to-cool color:
        - Hue: 30° (warm) to 210° (cool)
        - Saturation: 100% (you can tweak as you like)
        - Lightness: map 0..100 to 30..90
      */
      const hue = 30 + ((210 - 30) * colorTempValue) / 100; 
      const saturation = 100; 
      const lightness = 30 + ((90 - 30) * brightnessValue) / 100;
      const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  
      // Apply this color to the currently selected monitor's .preview
      const selectedMonitor = document.querySelector(".monitor.selected .preview");
      if (selectedMonitor) {
        selectedMonitor.style.backgroundColor = hslColor;
      }
    }
  
    // Function to display the selected mode name and values
    function updateSelectedModeInfo(modeName, colorTemp, brightness) {
      selectedModeText.textContent = 
        `${modeName} - Color Temperature: ${colorTemp}%, Brightness: ${brightness}%`;
    }
  
    // Click to select a monitor
    monitors.forEach((monitor) => {
      monitor.addEventListener("click", () => {
        monitors.forEach((m) => m.classList.remove("selected"));
        monitor.classList.add("selected");
        // Update the preview for the newly selected monitor
        updatePreview();
      });
    });
  
    // Listen for slider input changes
    colorTempSlider.addEventListener("input", updatePreview);
    brightnessSlider.addEventListener("input", updatePreview);
  
    // Preset Modes
    document.getElementById("reading-mode").addEventListener("click", () => {
      colorTempSlider.value = 50;
      brightnessSlider.value = 60;
      updatePreview();
      updateSelectedModeInfo("Reading Mode", 50, 60);
    });
  
    document.getElementById("movie-mode").addEventListener("click", () => {
      colorTempSlider.value = 70;
      brightnessSlider.value = 80;
      updatePreview();
      updateSelectedModeInfo("Movie Mode", 70, 80);
    });
  
    document.getElementById("office-mode").addEventListener("click", () => {
      colorTempSlider.value = 60;
      brightnessSlider.value = 70;
      updatePreview();
      updateSelectedModeInfo("Office Mode", 60, 70);
    });
  
    document.getElementById("health-mode").addEventListener("click", () => {
      colorTempSlider.value = 40;
      brightnessSlider.value = 50;
      updatePreview();
      updateSelectedModeInfo("Health Mode", 40, 50);
    });
  
    // Initialize the preview with default values on load
    updatePreview();
  });
  
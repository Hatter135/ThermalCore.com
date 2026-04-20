        function showPart() {
            const selected = document.getElementById('pc-part-selector').value;

            // Hide all cards first
            document.querySelectorAll('.part-info').forEach(div => div.hidden = true);

            // Show the one that matches the selection
            if (selected) {
                document.getElementById(selected).hidden = false;
            }
        }
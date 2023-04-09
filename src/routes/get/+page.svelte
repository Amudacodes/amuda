<div class="toggle-box">
  <input type="checkbox" id="toggle-box-checkbox" class="hidden" />
  <label for="toggle-box-checkbox" class="toggle-box-label"></label>
</div>

<style>
  .toggle-box-label {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: #cbd5e0;
  border-radius: 9999px;
  transition: background-color 0.2s;
}

.toggle-box-label:before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.2s;
}

#toggle-box-checkbox:checked + .toggle-box-label {
  background-color: #4a5568;
}

#toggle-box-checkbox:checked + .toggle-box-label:before {
  transform: translateX(20px);
}

</style>

<script>
  const toggleSwitch = document.querySelector('#toggle-box-checkbox');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('night');
  } else {
    body.classList.remove('night');
  }
});

</script>
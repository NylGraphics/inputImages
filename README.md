# inputImages
Easily display your checkboxes with on/off images.
As the script is in development and as there are no stable version for now, there's no minified version yet.

Exemple:

html input:
```
CHECKBOX: <input type="checkbox" value="0" id="check1">

```
javascript:
```
<script src="assets/js/jquery-2.1.3.min.js" type="text/javascript"></script>
<script src="assets/js/fieldDecorator.js" type="text/javascript"></script>
<script>
    $(document).ready(function(){
        $('#check1').fieldDecorator({
            srcOn: 'assets/img/checkboxOn.jpg',
            srcOff: 'assets/img/checkboxOff.jpg'
        });
    });
</script>

```




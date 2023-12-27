function Slider(label,min=0,max=50,val=10,step=1,parent=createDiv(),update=()=>{})
{
    let wrap=createDiv(label);
    wrap.parent(parent);
    wrap.class("slider");
    let slider=createSlider(min,max,val,step);
    slider.input(update);
    slider.class("form-control-range");
    slider.parent(wrapper);
    return (slider);
}

function Button(text,parent,callback,type="not_modal")
{
    let buttonwrap=createDiv();
    buttonwrap.class("button-wrapper");
    let button=createButton(text);
    button.class("butn");
    if(type=="modal")
    {
        button.attribute("data-toggle","modal");
        button.attribute("data-target","#exampleModal");
    }
    button.parent(buttonwrap);
    buttonwrap.parent(parent);
    button.mousPressed(callback);
}


function Colorpicker(label="Pick a color",startcolor="blue",parent=createDiv(),update=()=>{})
{
    let wrap=createDiv(label);
    wrap.class("color-picker");
    wrap.parent(parent);

    let picker=createColorPicker(startcolor);
    picker.input(()=>update(picker.value()));
    picker.parent(wrap);
    picker.class("form-control-range");
    return (picker);
}
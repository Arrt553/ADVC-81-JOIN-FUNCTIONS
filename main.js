
function paragraph_1()
{
    var inputs=[];
for (i=1;i<=6;i++)
{
    inputs.push(document.getElementById("para1_input_box_" + i).value);
    inputs.join(". ");
    document.getElementById("show_para1").innerHTML = inputs.join(". ");
}
}

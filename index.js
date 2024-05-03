window.onload=function()
        {
            loaditems();
        }
        function loaditems()
        {
            let htmlstr='';
            let parentele=document.querySelector('#items');
            let total=0;
            let completed=0;
            let pending=0;
            for(let key in itemslist)
            {
                total++;
                let value=itemslist[key];
                let stylestr='';
                let ischecked='';
                if(value['complete']==true)
                {
                    completed++;
                    stylestr="background-color:lightgrey;";
                    ischecked='checked';
                }
                else
                {
                    pending++;
                }
                htmlstr+=`<div onmouseover="hovered(${key})" onmouseout="unhovered(${key})" style="${stylestr}width:25vw;height:30px;padding-top:15px">
                            <input type="checkbox" onclick="checkedinp(this);" ${ischecked} class="check" id="${key}" name="${key}" value="${key}">
                            <label for="${key}" class="labeltext" style="font-size:18px">
                                ${value['name']}
                                </label>
                            <img onclick="removeitem(${key})"  id="cancelimg-${key}" style="height:15px;width:15px;padding-top:0px;display:none;padding-right:15px;" align="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhGj2l1ADyE5LWt3cyk780_pVTMLvDxtpRA&s" >
                        </div>`;
            }
            //alert(htmlstr);
            parentele.innerHTML=htmlstr;
            document.querySelector('#total').innerHTML=total;
            document.querySelector('#pending').innerHTML=pending;
            document.querySelector('#completed').innerHTML=completed;
        }
        function hovered(id)
        {
            document.querySelector('#cancelimg-'+id).style.display='inline';
        }
        function unhovered(id)
        {
            document.querySelector('#cancelimg-'+id).style.display='none';
        }
        function removeitem(id)
        {
            delete itemslist[id];
            console.log(itemslist);
            loaditems();
        }
        function checkedinp(ele)
        {
            if(itemslist[ele.id]['complete'])
            {
                itemslist[ele.id]['complete']=false;
            }
            else
            {
                itemslist[ele.id]['complete']=true;
            }
            loaditems();
        }
        function additem()
        {
            let val=document.querySelector('#inpbox').value;
            let keys=[];
            for(let key in itemslist)
            {
                keys.push(Number(key));
            }
            let nid;
            if(keys.length==0)
            {
                nid=1;
            }
            else
            {
                console.log(Math.max(...keys));
            nid=Math.max(...keys)+1;
            }
            let nitem={name:val,complete:false};
            itemslist[nid]=nitem;
            console.log(itemslist);
            loaditems();
            document.querySelector('#inpbox').value='';
        }
        function inpchanged()
        {
            let val=document.querySelector('#inpbox').value.trim();
            if(val!='')
            {
                document.querySelector('#addbtn').style.display='inline';
            }
            else{
                document.querySelector('#addbtn').style.display='none';
            }
        }
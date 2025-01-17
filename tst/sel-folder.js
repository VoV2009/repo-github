let psScript = `
Function Select-FolderDialog
{
    param([string]$Description = "Select Folder",[string]$RootFolder = "Desktop")

 [System.Reflection.Assembly]::LoadWithPartialName("System.windows.forms") |
     Out-Null     

   $objForm = New-Object System.Windows.Forms.FolderBrowserDialog
        $objForm.Rootfolder = $RootFolder
        $objForm.Description = $Description
        $Show = $objForm.ShowDialog()
        If ($Show -eq "OK")
        {
            Return $objForm.SelectedPath
        }
        Else
        {
            Write-Error "Operation cancelled by user."
        }
    }

$folder = Select-FolderDialog # the variable contains user folder selection
write-host $folder
`;
//var iconv = require('iconv');
const iconv = require('iconv-lite');
var spawn = require('child_process').spawn,
    child;
child = spawn('powershell.exe', [psScript]);
//spawn('powershell.exe', psScript);
child.stdout.on('data', function (data) {
    // Convert from an encoded buffer to a js string. str = iconv.decode(Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]), 'win1251'); // Convert from a js string to an encoded buffer. buf = iconv.encode("Sample input string", 'win1251'); // Check if encoding is supported iconv.encodingExists("us-ascii")
    //const str = iconv.decode(Buffer.from(data), 'win1251');
    const decodedString = iconv.decode(data, 'CP866');
    console.info('Powershell  Data: ' + decodedString); //.toString('utf8'));
    //console.info('Powershell  Data: ' + data); //.toString('utf8'));
    //const strData = data.toString('hex'); //Buffer.from(data); //, 'ascii');
    //console.info('Powershell xData: ' + strData); //.toString('utf8'));
});
child.stderr.on('data', function (data) {
    //this script block will get the output of the PS script
    console.info('Powershell Errors: ' + data);
});
child.on('exit', function () {
    console.info('Powershell Script finished');
});
child.stdin.end(); //end input

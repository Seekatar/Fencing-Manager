# sample REST calls to populate fencers and a bout
# This is PowerShell, but you can use what ever method you like to
# GET and POST
$baseUri = "http://localhost:3000/api"

$fencers = Invoke-RestMethod "$baseUri/fencers"

if ( "Jim Wallace" -notin $fencers.name)
{
    Invoke-RestMethod -Method POST `
        -Uri "$baseUri/fencers" `
        -Body (ConvertTo-Json @{
            name        = "Jim Wallace"
            epeeRating  = "B98"
            saberRating = "C98"
        } -Compress) `
        -UseBasicParsing `
        -ContentType 'application/json'
}

if ( "Jimmy Wallace" -notin $fencers.name)
{
    Invoke-RestMethod -Method POST `
    -Uri "$baseUri/fencers" `
    -Body (ConvertTo-Json @{
            name       = "Jimmmy Wallace"
            epeeRating = "B17"
        } -Compress) `
        -UseBasicParsing `
        -ContentType 'application/json'
}

$fencers = Invoke-RestMethod "$baseUri/fencers"
$fencers | Format-Table
$leftOid = $fencers[0]._id
$rightOid = $fencers[1]._id

$bouts = Invoke-RestMethod "$baseUri/bouts"
if ( !($bouts | Where-Object { $_.leftFencer._id -eq $leftOid -and $_.rightFencer._id -eq $rightOid}))
{
Invoke-RestMethod -Method POST `
    -Uri "$baseUri/bouts" `
    -Body (ConvertTo-Json @{
        leftFencer  = $leftOid
        rightFencer = $rightOid
    } -Compress) `
    -UseBasicParsing `
    -ContentType 'application/json'
}

$bouts = Invoke-RestMethod "$baseUri/bouts"
$bouts | Select-Object @{n='left';e={$_.leftFencer.name}}, @{n='right';e={$_.rightFencer.name}} | Format-Table

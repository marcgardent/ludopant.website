



Push-Location "$PsScriptRoot\sources\ludopant\"
ng build
Pop-Location


rm "$PsScriptRoot\docs" -Recurse
mkdir "$PsScriptRoot\docs"
Write-Output "ludopant.com" | Out-File "$PsScriptRoot\docs\CNAME" -Encoding utf8

copy -Path  "$PsScriptRoot\sources\ludopant\dist\ludopant\browser\*" -Destination "$PsScriptRoot\docs" -Recurse
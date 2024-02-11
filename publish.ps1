


Push-Location "$PsScriptRoot\sources\ludopant\"
ng build
Pop-Location

rm "$PsScriptRoot\docs" -Recurse
Write-Output "ludopant.com" | Out-File "$PsScriptRoot\docs\CNAME" -Encoding utf8

Copy-Item -Recurse -Source "$PsScriptRoot\sources\ludopant\dist\ludopant\browser" -Destination "$PsScriptRoot\docs\"
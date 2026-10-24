@echo off
setlocal
cd /d "%~dp0" || goto error

echo ===============================================
echo   Full repository upload to GitHub
 echo ===============================================
echo.
echo This uploads ALL local changes, including:
echo   - New files and folders
 echo   - Modified files
 echo   - Files and folders deleted locally
 echo.

git rev-parse --is-inside-work-tree >nul 2>&1 || goto error

echo Staging all changes...
git add --all || goto error

echo.
echo Changes staged for GitHub:
git diff --cached --name-status
if errorlevel 1 goto error

echo.
git diff --cached --quiet
if errorlevel 2 goto error
if errorlevel 1 goto commit

echo No local changes to commit.
goto push

:commit
echo.
echo Creating a commit...
git commit -m "Sync all local website files" || goto error

:push
echo.
echo Uploading to GitHub...
git push origin master || goto error

echo.
echo SUCCESS: Local changes have been pushed to GitHub.
pause
exit /b 0

:error
echo.
echo ERROR: Upload did not complete. Read the message above.
echo No force-push or automatic overwrite was attempted.
pause
exit /b 1

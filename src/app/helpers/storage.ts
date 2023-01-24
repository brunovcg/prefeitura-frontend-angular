export class StorageHelper {

 static set(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value))
 }

 static get(key: string){
  return JSON.parse(localStorage.getItem(key) || '')
 }
}
